import React from 'react';


export default class Svg extends React.Component{

	getIcon(icon) {
		var paths = [];
		
		var w=32,h=32;
		
		if (icon === 'check2') {
			paths.push("M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z");
			paths.push("M6.801 15.67l6.948 6.72 11.45-11.018-1.695-1.762-10.6 10.2 1.698 0.002-6.1-5.9z");
		} else if (icon === 'error') {
			let style = {
				fill:'none',
				stroke:'#FFFFFF',
				strokeWidth:2,
				strokeLinecap:'round',
				strokeMiterlimit:10
			};
			return {
				width: 50,
				height: 50,
				doms : (
				<g>
					<circle fill="#ff5d5e" cx="25" cy="25" r="25"/>
					<polyline style={style} points="16,34 25,25 34,16"/>
					<polyline style={style} points="16,16 25,25 34,34"/>
				</g>)
			};
		} else if (icon === 'circleCheckbox') {//设置css color改变背景色
            return {
                width: 30,
                height: 30,
                doms : (
					<g>
						<circle cx="15" cy="15" r="15"/>
						<path fill="#fff" d="M6.801 15.67l6.948 6.72 11.45-11.018-1.695-1.762-10.6 10.2 1.698 0.002-6.1-5.9z"/>
					</g>)
            };

        } else if (icon === '2') {//日历
			paths.push('M30.286 2.408h-5.687v-1.583h-0.001c-0.006-0.457-0.377-0.825-0.834-0.825s-0.828 0.368-0.834 0.825h-0.001v1.583h-13.538v-1.583h-0.001c-0.005-0.457-0.377-0.825-0.834-0.825s-0.828 0.368-0.834 0.825h-0.001v1.583h-5.687c-1.121 0-2.034 0.912-2.034 2.034v25.524c0 1.121 0.912 2.034 2.034 2.034h28.252c1.121 0 2.034-0.913 2.034-2.034v-25.524c-0.001-1.122-0.913-2.034-2.035-2.034zM30.73 29.966c0 0.245-0.199 0.445-0.444 0.445h-28.252c-0.245 0-0.444-0.199-0.444-0.445v-19.076h29.141l-0.001 19.076zM30.73 9.221h-29.141v-4.779c0-0.245 0.199-0.445 0.444-0.445h5.687v1.928h0.001c0 0.005-0.001 0.009-0.001 0.014 0 0.46 0.373 0.834 0.834 0.834s0.834-0.374 0.834-0.834c0-0.005-0.001-0.009-0.001-0.014h0.001v-1.928h13.538v1.928h0.001c0 0.005-0.001 0.009-0.001 0.014 0 0.46 0.374 0.834 0.834 0.834s0.834-0.374 0.834-0.834c0-0.005 0-0.009-0.001-0.014h0.001v-1.928h5.687c0.245 0 0.444 0.199 0.444 0.445v4.779h0.001zM4.404 17.946v0l5.1-0.001c0.005 0 0.009 0.001 0.014 0.001 0.461 0 0.834-0.373 0.834-0.834s-0.373-0.834-0.834-0.834c-0.004 0-0.009 0.001-0.014 0.001v-0.001l-5.1 0.001c-0.457 0.005-0.824 0.377-0.824 0.834s0.368 0.829 0.824 0.834zM13.598 17.946v0l5.1-0.001c0.005 0 0.010 0.001 0.015 0.001 0.46 0 0.834-0.373 0.834-0.834s-0.373-0.834-0.834-0.834c-0.004 0-0.009 0.001-0.015 0.001v-0.001l-5.1 0.001c-0.457 0.005-0.824 0.377-0.824 0.834s0.368 0.829 0.824 0.834zM22.791 17.946v0l5.1-0.001c0.004 0 0.009 0.001 0.015 0.001 0.46 0 0.834-0.373 0.834-0.834s-0.373-0.834-0.834-0.834c-0.005 0-0.010 0.001-0.015 0.001v-0.001l-5.1 0.001c-0.456 0.005-0.824 0.377-0.824 0.834s0.368 0.829 0.824 0.834zM22.791 24.57v0l5.1-0.001c0.004 0 0.009 0.001 0.015 0.001 0.46 0 0.834-0.373 0.834-0.834s-0.373-0.834-0.834-0.834c-0.005 0-0.010 0.001-0.015 0.001v-0.001l-5.1 0.001c-0.456 0.005-0.824 0.377-0.824 0.834s0.368 0.829 0.824 0.834zM13.598 24.57v0l5.1-0.001c0.005 0 0.010 0.001 0.015 0.001 0.46 0 0.834-0.373 0.834-0.834s-0.373-0.834-0.834-0.834c-0.004 0-0.009 0.001-0.015 0.001v-0.001l-5.1 0.001c-0.457 0.005-0.824 0.377-0.824 0.834s0.368 0.829 0.824 0.834zM4.404 24.57v0l5.1-0.001c0.005 0 0.009 0.001 0.014 0.001 0.461 0 0.834-0.373 0.834-0.834s-0.373-0.834-0.834-0.834c-0.004 0-0.009 0.001-0.014 0.001v-0.001l-5.1 0.001c-0.457 0.005-0.824 0.377-0.824 0.834s0.368 0.829 0.824 0.834z');
		} else if (icon ==='3') {//餐厅
			w = h = 1024;
			paths.push('M827 960c-0 38-9 62-46 62-36-0-44-24-44-62l-1-361c-1 0-102-13-137-116 0 0 41-483 198-482 39 0 28 105 28 105L827 960zM363 473l-18 0 26 488c0 38-34 62-70 62-36 0-68-24-68-62l27-487-19-0c-14 0-86-131-86-154L186 2c0 0 47 1 47 1l-0 208c0 23-0 42 23 42 23 0 24-18 24-42l0-208 64 0 0 210c0 23 3 39 26 39 23 0 23-15 23-39l0-210c0 0 37 0 39 0l33 314C468 341 378 473 363 473z');
		} else if (icon === '4') {//wifi
			w = 1355;
			h = 1024;
			paths.push('M897 803C875 803 853 794 837 777 796 732 738 706 677 706 615 706 558 731 517 776 487 810 435 812 402 782 369 752 366 701 396 668 468 589 570 544 677 544 783 544 885 589 957 668 987 701 985 752 951 782 936 796 917 803 897 803L897 803ZM1077 601C1056 601 1035 593 1020 577 928 486 806 436 677 436 547 436 425 486 334 577 302 608 251 608 219 576 187 545 188 493 219 462 341 340 504 273 677 273 849 273 1012 340 1134 462 1166 494 1166 545 1134 577 1119 593 1098 601 1077 601L1077 601ZM1256 398C1236 398 1216 391 1200 376 1059 240 873 165 677 165 480 165 294 240 153 375 121 406 70 405 39 373 8 341 9 289 41 258 212 94 438 3 677 3 915 3 1141 94 1312 259 1345 290 1346 341 1315 373 1299 390 1278 398 1256 398L1256 398ZM579 922C579 976 623 1020 677 1020 731 1020 775 976 775 922 775 868 731 824 677 824 623 824 579 868 579 922L579 922Z');
		} else if (icon === '5') {//P停车
			w = h = 1024;
			paths.push('M563.2 469 426 469 426 298 563.2 298C610 298 648 337 648 384 648 430 610 469 563.2 469M554 128 256 128 256 896 426 896 426 640 554 640C695 640 810 525 810 384 810 242 695 128 554 128Z');
		} else if (icon === '6') {//飞机
			w = h = 1024;
			paths.push('M927 806l-182-182 100-519-87-85-172 465-235-211 42-217-41-40-146 215-193 119 41 40 207-28 213 225-462 165 87 85 514-89 183 183c82 81 148 88 185 52 36-35 26-98-55-179z');
		} else if (icon === '7') {//游泳
			w = h = 1024;
			paths.push('M956 835c-39 6-65 46-116 47-60 0-123-51-191-51-55 0-115 54-172 54-48 0-91-49-138-49-54 0-113 49-164 49-83 0-170-43-170-43L0 692c0 0 96 45 170 45 47 0 96-46 147-46 48 0 98 46 147 46 53 0 106-45 158-45 46 0 147 45 191 45 59 0 97-46 147-46 48 0 60 46 60 46L1024 851C1024 851 1006 827 956 835zM830 563c-68 0-124-55-124-124 0-68 55-124 124-124 68 0 124 55 124 124C954 508 898 563 830 563zM760 254l-250 49 243 366c0 0-46-32-112-33-43-0-92 32-148 32-52-0-109-33-162-33-64-0-124 32-174 32-72-0-120-0-120-0l406-235c0 0-91-134-92-135-0-0-0-1-0-1-23-33-16-94 43-104L734 123c38-7 68 11 75 50C817 213 799 246.4 760 254z');
		} else if (icon === '8') {//健身
			w = h = 1024;
			paths.push('M961 789l62 51-70 84-60-49-54 67c-30 38-72 31-95 12-23-19-21-44 9-83l54-67-17-14-76 95c-38 47-88 68-135 30-46-38-39-94-0-142l75-95L312 397l-76 95c-38 47-90 67-137 28-46-38-37-93 0-141l75-95-16-13-52 65c-30 38-60 52-83 32-23-19-34-66-4-105l52-65L13 149l70-84 56 46 36-45c30-38 76-34 100-15 23 19 18 49-12 87l-36 45 16 13 57-72c38-47 90-69 137-30 46 38 38 95 0 143l-57 72 340 280 57-72c38-47 91-68 138-29 46 38 36 94-2 141l-57 72 17 14 39-49c30-38 57-50 81-30 23 19 35 63 4 101L961 789z');
		} else if (icon === '9') {//棋牌室
			w = h = 1024;
			paths.push('M201 782 201 239c0-5 1-11 1-17L47 272C11 284-8 323 3 359l167 516c9 29 36 47 65 47 7 0 14-1 21-3l44-14C245 894 201 843 201 782z');
			paths.push('M423 99 423 100 423 100Z');
			paths.push('M314 701l167-516c1-5 3-11 6-14L326 170c-37 0-70 31-70 69l0 543c0 37 32 71 70 71l55 0C324 826 294 762 314 701z');
			paths.push('M976 272 621 157c-7-2-14-3-21-3-29 0-56 18-65 47l-167 516c-11 36 8 75 44 86l354 115c7 2 14 3 21 3 29 0 56-18 65-47l167-516C1032 323 1012 284 976 272zM644 676c-167-203-69-303-8-303 51 0 73 37 82 75 27-30 68-43 110-13C879 471 899 610 644 676z');
		} else if (icon === '10') {//浴足/spa
			w = h = 1024;
			paths.push('M955 826l-63-126c0-113-67-190-126-190-58 0-142 4-142 63L449 573C449 465 691 256 765 256c180 0 253 260 253 380l0 190L955 826zM512 320c-70 0-126-56-126-126 0-70 56-126 126-126 70 0 126 56 126 126C639 263 582 320 512 320zM702 636l0 190-348 0c0 0-10-5-19-12L280 939c-5 6-13 9-21 10l0 3L5 953 5 826 211 826l100-176c7-8 18-11 28-9 4-2 9-3 14-3L702 636zM132 700c-70 0-126-56-126-126s56-126 126-126c70 0 126 56 126 126C259 643 202 700 132 700z');
		} else if (icon === '11') {//会议讲课
			w = 1024;
			h = 1024;
			paths.push("M512 227m-85 0a85 85 0 1 0 170 0 85 85 0 1 0-170 0Z");
			paths.push("M199 312m-85 0a85 85 0 1 0 170 0 85 85 0 1 0-170 0Z");
			paths.push("M824 312m-85 0a85 85 0 1 0 170 0 85 85 0 1 0-170 0Z");
			paths.push("M199 739a312 142 0 1 0 625 0 312 142 0 1 0-625 0Z");
			paths.push("M335 563C321 500 264 455 199 455c-79 0-142 62-142 142v142h85c0-71 65-142 193-176zM512 540c54 0 99 5 142 14V512c0-79-62-142-142-142s-142 62-142 142v42c42-8 88-14 142-14zM824 455c-65 0-122 45-136 108C816 597 881 668 881 739h85v-142c0-79-62-142-142-142z");
		} else if (icon === '12') {//卡拉ok
			w = 1024;
			h = 1024;
			paths.push('M943 347c-77-13-150-50-208-108-58-58-94-131-108-208 78-48 191-31 269 46C974 156 992 269 943 347M889 401c-74-20-143-59-200-116C631 228 593 158 572 84c-48 78-31 191 46 269C697 432 811 450 889 401M578 748c-97 0-167 60-228 114-67 59-126 110-213 84-17-12-17-22-17-26-1-23 27-54 41-66 1-1 2-3 4-5 22 8 49 3 67-14l443-365C638 453 603 431 573 400c-30-30-53-65-68-102L139 742c-16 16-20 38-16 59-1 0-2 1-4 2-6 5-67 57-64 120 1 21 10 53 50 80l7 3c25 8 49 12 71 12 86 0 151-56 210-107 57-50 112-98 185-98 168 0 298 180 299 182 10 14 30 17 45 7 14-10 18-30 7-45C925 949 780 748 578 748');
		} else if (icon === '13') { //有线网络
			w = h = 1024;
			paths.push('M64 832l256 0 0 128-256 0 0-128Z');
			paths.push('M704 832l256 0 0 128-256 0 0-128Z');
			paths.push('M896 0 127 0C57 0 0 57 0 127l0 449C0 646 57 704 127 704L448 704l0 64c-35 0-64 29-64 64l0 126c0 36 28 64 64 64L575 1023c36 0 64-28 64-64l0-126c0-36-28-64-64-64l0-64 320 0c70 0 127-57 127-127L1023 127C1024 57 966 0 896 0zM896 511c0 35-29 64-64 64L192 576C156 576 128 548 128 511L128 192C128 156 157 128 192 128l639 0C867 128 896 156 896 192L896 511z');
		} else if (icon === 'arrow-r') {
			w = 17;
			paths.push('M17.081 16.001l-16.002 15.999-1.079-1.078 14.918-14.922-14.918-14.922 1.079-1.078 16.002 16.001z');
		} else if (icon === 'arrow2') {
			w = h = 487;
			paths.push('M482,234.839l-116.5-67.261c-4.783-2.761-10.898-1.122-13.66,3.66c-2.762,4.783-1.122,10.898,3.66,13.66l84.213,48.62H10 c-5.523,0-10,4.478-10,10c0,5.521,4.477,10,10,10h429.646L355.5,302.101c-4.783,2.762-6.422,8.877-3.66,13.66 c1.853,3.208,5.213,5.002,8.669,5.002c1.696,0,3.416-0.434,4.991-1.342L482,252.159c3.094-1.786,5-5.088,5-8.66 C487,239.927,485.094,236.625,482,234.839z');
		} else if (icon === 'phone') {
			w = 1024;
			h = 1024;
			paths.push('M233 129c4 4 11 11 21 22 13 16 29 37 44 61 30 46 48 84 54 98-1 5-4 11-11 22-12 20-29 49-29 90 0 25 12 54 39 91 17 24 41 51 68 78 26 26 53 50 76 68 36 28 63 40 89 40 36 0 64-15 87-27 12-6 24-13 33-14 12 4 48 22 102 61 45 32 73 57 85 70-4 22-17 46-38 65-12 11-25 21-39 27-12 5-24 8-33 8-55 0-124-23-199-67-73-43-149-104-220-176-69-70-128-147-171-221-21-36-37-71-48-103-10-31-15-59-15-82 0-7 3-18 10-30 7-13 19-28 34-41 13-12 29-24 43-33C223 134 229 131 233 129M241 62c-52 0-177 94-177 181 0 253 435 715 719 715 78 0 177-83 177-181 0-33-203-181-250-181-48 0-83 42-125 42-41 0-209-167-209-214 0-46 41-69 41-117C418 273 293 62 241 62L241 62z');
		} else if ( icon === 'hongbao') {
			return {
				width: 26,
				height:32,
				doms: (
					<g>
						<path fill="rgb(229, 46, 46)" d="M25.811 7.618c-0.139-2.509-2.217-4.501-4.761-4.501-0.754 0-1.467 0.176-2.1 0.488-1.16-2.147-3.43-3.604-6.040-3.604s-4.881 1.458-6.041 3.604c-0.634-0.312-1.346-0.488-2.1-0.488-2.634 0-4.768 2.135-4.768 4.769 0 0.090 0.003 0.179 0.008 0.268v22.222c0 0.896 0.73 1.624 1.626 1.624h22.565c0.896 0 1.626-0.728 1.626-1.624v-22.565c-0-0.065-0.006-0.13-0.013-0.193zM24.198 30.719h-22.565c-0.19 0-0.345-0.153-0.345-0.344v-15.884h23.254v15.884c0 0.19-0.154 0.344-0.345 0.344z" />
						<path fill="rgb(255, 174, 44)" d="M22.336 14.457c0.008-0.154 0.012-0.308 0.012-0.464 0-5.212-4.225-9.437-9.436-9.437s-9.436 4.225-9.436 9.437c0 0.155 0.004 0.31 0.011 0.464h18.849z" />
						<path fill="rgb(255, 224, 95)" d="M21.139 14.457c0.008-0.152 0.013-0.306 0.013-0.461 0-4.551-3.689-8.241-8.24-8.241s-8.241 3.69-8.241 8.241c0 0.154 0.004 0.309 0.013 0.461h16.455z" />
						<path fill="rgb(255, 174, 44)" d="M12.389 16.705v-1.997h-2.512v-0.821h2.512v-0.853h-2.512v-0.885h2.052l-2.439-4.284h1.208l1.758 3.119c0.193 0.355 0.343 0.662 0.449 0.921 0.098-0.209 0.265-0.534 0.5-0.977l1.641-3.063h1.288l-2.43 4.284h2.044v0.885h-2.48v0.853h2.48v0.821h-2.48v1.997h-1.079z" />
						<path fill="rgb(255, 94, 94)" d="M0.003 13.893v15.884c0 0.896 0.73 1.624 1.626 1.624h22.565c0.896 0 1.626-0.728 1.626-1.624v-15.884h-25.817z" />
					</g>
				)
			};
		} else if ( icon === 'location') {
			w = 1000;
			h = 1000;
			paths.push('M500,990c0,0-367.5-409.5-367.5-612.5C132.5,174.5,297,10,500,10c203,0,367.5,164.5,367.5,367.5C867.5,580.5,500,990,500,990L500,990z M500,57.1c-176.9,0-320.4,145.5-320.4,325.1S500,924,500,924s320.4-362.3,320.4-541.8C820.4,202.7,676.9,57.1,500,57.1L500,57.1z M500,500c-84.6,0-153.1-68.6-153.1-153.1c0-84.6,68.6-153.1,153.1-153.1c84.6,0,153.1,68.6,153.1,153.1C653.1,431.4,584.6,500,500,500L500,500z M500,236.2c-62.4,0-113.1,50.6-113.1,113.1c0,62.4,50.6,113.1,113.1,113.1c62.5,0,113.1-50.6,113.1-113.1C613.1,286.8,562.5,236.2,500,236.2L500,236.2z');
		} else if (icon === 'ticket') {
			w = 300;
			h = 53;
			return {
				width: w,
				height: h,
				doms : (
				<g transform="translate(0,53) scale(0.1,-0.1)" fill="" stroke="none">
					<path d="M249 523 c-16 -3 -65 -43 -133 -112 -148 -148 -148 -145 -7 -285 72
					-72 118 -109 141 -116 22 -6 512 -10 1365 -10 1188 0 1333 2 1353 16 22 15 22
					19 22 249 0 230 0 234 -22 249 -20 14 -164 16 -1358 15 -734 -1 -1347 -4
					-1361 -6z m2709 -25 c17 -17 17 -449 0 -466 -17 -17 -2679 -17 -2711 -1 -31
					16 -227 216 -227 231 0 15 196 221 225 237 30 16 2697 15 2713 -1z"/>
					<path d="M204 331 c-72 -44 -42 -145 43 -145 26 0 42 7 59 28 30 34 30 68 2
					100 -32 35 -66 41 -104 17z m88 -35 c14 -20 8 -56 -11 -75 -26 -26 -68 -16
					-87 21 -14 28 -14 30 15 59 27 26 33 29 53 18 13 -7 26 -17 30 -23z"/>
				</g>)
			};
		} else if (icon === 'diamond') {
			w = 1024;
			h = 1024;
			paths.push('M896 409.6C896 409.6 896 409.6 896 409.6c0-6.4 0-12.8-6.4-19.2 0 0 0 0 0 0l-140.8-211.2c0 0 0 0 0 0 0 0-6.4-6.4-6.4-6.4 0 0 0 0-6.4 0 0 0 0 0 0 0 0 0-6.4 0-6.4 0 0 0 0 0-6.4 0L300.8 172.8c0 0 0 0-6.4 0 0 0-6.4 0-6.4 0 0 0 0 0 0 0 0 0 0 0-6.4 0 0 0-6.4 6.4-6.4 6.4 0 0 0 0 0 0L134.4 390.4c0 0 0 0 0 0C128 396.8 128 403.2 128 409.6c0 0 0 0 0 0 0 0 0 0 0 0 0 6.4 0 12.8 6.4 12.8 0 0 0 0 0 0l352 422.4c0 0 0 0 6.4 6.4 0 0 0 0 6.4 0 6.4 0 12.8 6.4 19.2 6.4s12.8 0 19.2-6.4c0 0 0 0 6.4 0 0 0 0 0 6.4-6.4l352-422.4c0 0 0 0 0 0C889.6 422.4 896 416 896 409.6 896 409.6 896 409.6 896 409.6zM288 268.8l38.4 108.8L217.6 377.6 288 268.8zM608 441.6 512 729.6 416 441.6 608 441.6zM428.8 377.6 512 256l83.2 121.6L428.8 377.6zM569.6 224l108.8 0L640 332.8 569.6 224zM384 332.8 345.6 224l108.8 0L384 332.8zM345.6 441.6l76.8 236.8L230.4 441.6 345.6 441.6zM678.4 441.6l121.6 0-198.4 236.8L678.4 441.6zM697.6 377.6l38.4-108.8 70.4 108.8L697.6 377.6z');
		}
		return {
			width: w,
			height: h,
			doms: paths.map( (d,idx)=>{
					var color = idx % 2 ? '#ffffff' : '#55b8e1';
					return <path fill={color} d={d} key={idx} />;
				})
		};
	}

	render() {
		var i = this.getIcon(this.props.icon);
		var width = this.props.width || i.width;
		var height = this.props.height || i.height;
		var rotation = this.props.rotation || 0;

		return (<svg className={"icon icon-"+this.props.icon} version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={'0 0 '+width+' '+height} style={{
			transform: 'rotate('+rotation+')',
			transformOrigin: '50% 50%'
		}}>
			{i.doms}
		</svg>);
	}
}