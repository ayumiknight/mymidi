import ScrollPane from '../lib/nicemove.js';
require('./slider.less');

export default class Slider extends React.Component {

    constructor() {
        super();
        this.state = {
            instance: null,
            activeIndicator: 0
        };
        this.onResize = this.onResize.bind(this);
        this.initSlider = this.initSlider.bind(this);
        this.showFirstSlide = this.showFirstSlide.bind(this);
    }


    componentDidUpdate(prevProps, prevState) {
        this.initSlider();
        setTimeout(() => {
            this.showFirstSlide();
            this.onResize();
        }, 10);
    }

    componentDidMount(prevProps, prevState) {
        this.initSlider();
    }

    autoPlay() {
        this.sliderIndex = 1;
        const total = this.props.children.length;
        const interval = this.props.interval || 3000;
        if (total) {
            setInterval(() => {
                if (this.sliderIndex === total) {
                    this.sliderIndex = 0;
                }
                this.state.instance.toPageIndex(this.sliderIndex)
                this.sliderIndex++;
            }, interval)
        }
    }

    componentWillUnmount() {
        this.state.instance = null;
    }


    onResize() {
        if (this.state.instance) {
            this.state.instance.resize();
        }
    }

    initSlider() {
        if (this.state.instance) return;

        var container = this.refs.slider;
        var inner = this.refs.inner;
        var children = inner.children;
        var html = [];
        var indicatorContainer = this.refs.indicators;

        this.state.instance = new NiceMove(inner, true, false, {
            moveThresh: 10,
            isPagedX: true,
            onPageChanged: (evt) => {
                this.setState({ activeIndicator: evt.index });
                this.sliderIndex=evt.index;
                lazyLoad(evt.index + 1);
            },
            onFirstMove: () => {
                lazyLoad(1);
            }
        });

        setTimeout(() => {
            lazyLoad(0);
            lazyLoad(1);
            if (this.props.autoPlay) {
                this.autoPlay();
            }
        }, 0);

        window.addEventListener('resize', () => {
            this.onResize();
        });

        function lazyLoad(i) {
            //console.log("get");
            var slide = children[i];
            if (slide && slide.getAttribute('data-background-image') && !slide.getAttribute('data-loaded')) {
                var src = z.getThumbnail(slide.getAttribute('data-background-image'), slide);
                slide.style.backgroundImage = 'url(' + src + ')';
                slide.setAttribute('data-loaded', 'yes');
            }
        }
    }

    linkTo = (src) => {
        if (src) {
            location = src;
        }
    }

    showFirstSlide() {
        var container = this.refs.slider;
        var inner = this.refs.inner;
        var children = inner.children;
        var slide = children[0];
        if (slide && slide.getAttribute('data-background-image') && !slide.getAttribute('data-loaded')) {
            var src = z.getThumbnail(slide.getAttribute('data-background-image'), slide);
            slide.style.backgroundImage = 'url(' + src + ')';
            slide.setAttribute('data-loaded', 'yes');
        }
    }

    render() {

        return (
            <div className="slider" ref="slider">
                <div className="inner" ref="inner">
                    {this.props.children.map((d, idx) => {
                        return (
                            <div
                                className="photo"
                                key={idx}
                                data-background-image={d.props.src}
                                {...z.tap(() => this.linkTo(d.props.link)) }
                            />
                        );
                    })}
                </div>
                <div className="indicators" ref="indicators">
                    {this.props.children.map((d, idx) => {
                        return (<a ref={'indicator_' + idx}
                            className={'indicator index' + idx + ' ' + (idx == this.state.activeIndicator ? 'active' : '')}
                            key={idx}>{idx}</a>);
                    })}
                </div>
            </div>
        );
    }
}

