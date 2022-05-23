import React from 'react';
import style from "../styles/gallery.module.scss"

function Galleria() {
    return (
        <div className={style.body}>
            <input className={style.input} type="checkbox" id="lightswitch" accessKey="l"/>
            <input className={style.input} type="checkbox" checked="checked" id="wall4" accessKey="x"/>

            <label></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label>
            <label className={[style.p1hover, style.pointer]} title="Tap to zoom - double tap to view code">
                <a href="https://codepen.io/ivorjetski/pen/dBYWWZ" target="_blank"></a>
                <label className={style.pointer}></label>
            </label>
            <label className="p1hover pointer" title="Tap to zoom - double tap to view code">
                <a href="https://codepen.io/ivorjetski/pen/dBYWWZ" target="_blank"></a>
                <label className="pointer"></label>
            </label>
            <label className="p1hover pointer" title="Tap to zoom - double tap to view code">
                <a  href="https://codepen.io/ivorjetski/pen/dBYWWZ" target="_blank"></a>
                <label className="pointer"></label>
            </label>
            <label className={"label"}></label>
            <label className="p2hover pointer" title="Tap to zoom - double tap to view code">
                <a className={"a"} href="https://codepen.io/ivorjetski/pen/xxGYWQG" target="_blank"></a>
                <label className="pointer"></label>
            </label>
            <label className="p2hover pointer" title="Tap to zoom - double tap to view code">
                <a className={"a"} href="https://codepen.io/ivorjetski/pen/xxGYWQG" target="_blank"></a>
                <label className="pointer"></label>
            </label>
            <label className="p2hover pointer" title="Tap to zoom - double tap to view code">
                <a className={"a"} href="https://codepen.io/ivorjetski/pen/xxGYWQG" target="_blank"></a>
                <label className="pointer"></label>
            </label>
            <label className={"label"}></label>
            <label className="label p3hover pointer" title="Tap to zoom - double tap to view code">
                <a className={"a"} href="https://codepen.io/ivorjetski/pen/xMJoYO" target="_blank"></a>
                <label className="pointer"></label>
            </label>
            <label className="label p3hover pointer" title="Tap to zoom - double tap to view code">
                <a className={"a"} href="https://codepen.io/ivorjetski/pen/xMJoYO" target="_blank"></a>
                <label className="pointer"></label>
            </label>
            <label className="label p3hover pointer" title="Tap to zoom - double tap to view code">
                <a className={"a"} href="https://codepen.io/ivorjetski/pen/xMJoYO" target="_blank"></a>
                <label className="pointer"></label>
            </label>
            <label className="pointer turn" htmlFor="wall4" title="Rotate right"></label>
            <label className={"label"}></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label><label className={"label"}></label>

            <z className={"z"}>
                <x className={"x"}>
                    <y className={"y"}>
                        <floor className={"floor"}></floor>
                        <ceiling className={"ceiling"}></ceiling>
                        <wall1 className={"wall1"}>
                            <painting className={"painting"}>
                                <img className={"img"} src="https://tinydesign.co.uk/gallery/gallery-img/portrait.jpg"/>
                                <p className={"p"}>
                                    Pure CSS Only Portrait<br/>
                                    Isla<br/>
                                    <small className={"small"}>Ben Evans</small>
                                </p>
                            </painting>
                        </wall1>
                        <wall2 className={"wall2"}>
                            <painting className="painting">
                                <img className={"img"}src="https://tinydesign.co.uk/gallery/gallery-img/landscape.jpg"/>
                                <p className="p">
                                    Pure CSS Landscape <br/>
                                    An Evening in Southwold<br/>
                                    <small className="small">Ben Evans</small>
                                </p>
                            </painting>
                        </wall2>
                        <wall3 className={"wall3"}>
                            <painting className="painting">
                                <img className={"img"}src="https://tinydesign.co.uk/gallery/gallery-img/still-life.jpg"/>
                                <p className="p">
                                    Pure CSS Still Life<br/>
                                    Water and Lemons<br/>
                                    <small className="small">Ben Evans</small>
                                </p>
                            </painting>
                        </wall3>
                        <wall4 className={"wall4"}>

                            <notice className={"notice"}>

                                <a className={"a"} title="Buy the landscape - CSS Art for your wall!" target="_blank"
                                   href="https://www.redbubble.com/i/canvas-print/Pure-CSS-Landscape-An-Evening-in-Southwold-by-Ivorjetski/48823594.4ZB30">Buy
                                    the landscape</a>
                                <a className={"a"} title="Buy the still life - CSS Art for your wall!" target="_blank"
                                   href="https://www.redbubble.com/i/canvas-print/Pure-CSS-Still-Life-Water-and-Lemons-by-Ivorjetski/48862524.4ZB30">Buy
                                    the still life</a>
                                <a className={"a"} title="Buy the portrait - CSS Art for your wall!" target="_blank"
                                   href="https://www.redbubble.com/i/framed-print/Pure-CSS-Portrait-Isla-by-Ivorjetski/48862324.16RW4">Buy
                                    the portrait</a>
                            </notice>
                            <door className={"door"}>
                                <a className={"a"} target="_blank" title="Exit" href="https://codepen.io/ivorjetski">
                                </a>
                            </door>

                            <label htmlFor="lightswitch" className="pointer" title="Switch"></label>
                            <fireexit className={"fireexit"}>
                                <i className={"i"}></i>
                                <i className={"i"}></i>
                            </fireexit>
                        </wall4>
                    </y>
                </x>
            </z>

            <label className="turnback" title="Rotate left" htmlFor="wall4"></label>
        </div>
    );
}

export default Galleria;
