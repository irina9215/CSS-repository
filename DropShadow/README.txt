	随着CSS3和HTML5的不断发展和壮大，大家在平时中也发现了不少实例或网站都不需要使用图片来进行设计了，直接使用代码来完成。

	本次练习，主要使用CSS3的box-shadow配合部分标签和CSS3的伪类中的“:before”和“:after”制作各种不同的Box Drop Shadow效果。

	使用CSS3来做设计效果，我们始终少不了的一样东西，那就是HTML Markup。

	<div class="box"></div>

	基本的CSS Code：

	.box {
		width:300px;
		min-height:300px;
		margin:30px;
		display:inline-block;
		border:1px solid #ccc;
		background:#fff;
		position:relative;//必不可少的relative
	}


	效果一是制作一个简单的阴影效果，让盒子左上角和右下角有一个小阴影，并添加了少许的内阴影效果，来增强质感。那么一起来看代码吧。

