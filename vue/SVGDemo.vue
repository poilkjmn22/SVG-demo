<template lang="html">
  <div class="svg-demo">
    <svg ref="svg">

    </svg>
    <svg width="0" height="0">
        <pattern id="pattern" patternUnits="userSpaceOnUse" x="0" y="0" width="10" height="10" viewBox="0 0 10 10">
            <path d="M-5,0,10,15M0-5,15,10" stroke="white" stroke-width="5"></path>
        </pattern>
        <desc>Created with Snap</desc>
        <defs></defs>
    </svg>
  </div>
</template>

<script>
import Snap from 'snapsvg';
export default {
  mounted(){
    var s = Snap(this.$refs.svg);
    var bigCircle = s.circle(150,150,100);
    bigCircle.attr({
        fill: "#bada55",
        stroke: "#000",
        strokeWidth: 5
    });
    var smallCircle = s.circle(100, 150, 70);
    var discs = s.group(smallCircle, s.circle(200, 150, 70));
    discs.attr({
      fill: '#fff'
    });
    bigCircle.attr({
      mask: discs
    });
    smallCircle.animate({r: 50}, 1000);

    discs.select("circle:nth-child(2)").animate({r: 50}, 1000);

    // Now lets create pattern
    var p = s.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
            fill: "none",
            stroke: "#bada55",
            strokeWidth: 5
        });
    // To create pattern,
    // just specify dimensions in pattern method:
    p = p.pattern(0, 0, 10, 10);
    // Then use it as a fill on big circle
    bigCircle.attr({
        fill: p
    });
    // We could also grab pattern from SVG
    // already embedded into our page
    discs.attr({
        fill: Snap("#pattern")
    });

    // Lets change fill of circles to gradient
    // This string means relative radial gradient
    // from white to black
    discs.attr({fill: "r()#fff-#000"});
    // Note that you have two gradients for each circle
    // If we want them to share one gradient,
    // we need to use absolute gradient with capital R
    discs.attr({fill: "R(150, 150, 100)#fff-#000"});
  }
}
</script>

<style lang="css">
.svg-demo{
  width: 300px;
  height: 300px;
}
.svg-demo svg{
  width: 100%;
  height: 100%;
}
</style>
