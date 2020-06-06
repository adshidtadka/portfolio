<template>
  <div id="home"></div>
</template>

<script>
import CycleLoader from "../components/CycleLoader.vue";
import * as THREE from "three";

import { OrbitControls } from "../misc/OrbitControls.js";

export default {
  name: "home",
  data() {
    var camera, scene, renderer, geometry, controls;
    return { camera, scene, renderer, geometry };
  },
  mounted() {
    this.init();
    this.animate();
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
    init() {
      this.camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      this.camera.position.set(0, -400, 600);

      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xf0f0f0);

      var loader = new THREE.FontLoader();
      loader.load("../misc/helvetiker_regular.typeface.json", function(font) {
        var xMid, text;

        var color = 0x006699;

        var matDark = new THREE.LineBasicMaterial({
          color: color,
          side: THREE.DoubleSide
        });

        var matLite = new THREE.MeshBasicMaterial({
          color: color,
          transparent: true,
          opacity: 0.4,
          side: THREE.DoubleSide
        });

        var message = "   Three.js\nSimple text.";

        var shapes = font.generateShapes(message, 100);
        this.geometry = new THREE.ShapeBufferGeometry(shapes);

        this.geometry.computeBoundingBox();

        xMid =
          -0.5 *
          (this.geometry.boundingBox.max.x - this.geometry.boundingBox.min.x);

        this.geometry.translate(xMid, 0, 0);

        // make shape ( N.B. edge view not visible )

        text = new THREE.Mesh(this.geometry, matLite);
        text.position.z = -150;
        this.scene.add(text);

        // make line shape ( N.B. edge view remains visible )

        var holeShapes = [];

        for (var i = 0; i < shapes.length; i++) {
          var shape = shapes[i];

          if (shape.holes && shape.holes.length > 0) {
            for (var j = 0; j < shape.holes.length; j++) {
              var hole = shape.holes[j];
              holeShapes.push(hole);
            }
          }
        }

        shapes.push.apply(shapes, holeShapes);

        var lineText = new THREE.Object3D();

        for (var i = 0; i < shapes.length; i++) {
          var shape = shapes[i];

          var points = shape.getPoints();
          var geometry = new THREE.BufferGeometry().setFromPoints(points);

          geometry.translate(xMid, 0, 0);

          var lineMesh = new THREE.Line(geometry, matDark);
          lineText.add(lineMesh);
        }

        this.scene.add(lineText);
      }); //end load function

      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(this.renderer.domElement);

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.target.set(0, 0, 0);
      this.controls.update();

      window.addEventListener("resize", this.onWindowResize, false);
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }
};
</script>
