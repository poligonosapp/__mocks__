let loadable = require('@loadable/component'); // https://github.com/gregberge/loadable-components
let PropsUser = require('./../src/PoligonosApp');
let React = require('react');
let { FC } = require('react'); // private FC typescript 4060
let ReactSVG = require('react');
// let React = loadable( () => import('react') );
// let {FC} = loadable( () => import('react') );
// let ReactSVG = loadable( () => import('react') );

// import React, {FC} from "react";
// import SVG from "typescript";

let SVG = require('typescript');
//let SVG = loadable( () => import('typescript') );

import PoligonosApp, {
  LatLngsBoundsReturnType,
  PropsUser
} from '../src/PoligonosApp';

export function GetMockPolygonsLatLngBounds(polygons?: PropsUser['polygonsLatLngBounds']): typeof FC<PropsUser> {

  // let LatLngsBoundsReturnType = require('./../src/PoligonosApp');

  // let polygonsLatLngsBounds: Number[][] | LatLngsBoundsReturnType[];

  console.log(' \n __mocks__polygons.geojson \n ')

  // let LatLngBoundsFunction = require('./../src/geo/LatLngsBoundsFunction')

  try {
    if (polygons) {
      
      polygons = PoligonosApp().L.polygon.toGeoJSON(polygons);

      // polygons.addEventListener(this);
      return polygons;

    }
  } catch (e) {

  } finally {



  }

  // if (s) {
  // return polygonsLatLngsBounds;// typescript 2322
  // }

  // return polygonsLatLngsBounds;// typescript 2322
} // end function getMockPolygons

export default GetMockPolygonsLatLngBounds;
