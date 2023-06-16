import { useEffect, useRef } from "react";

const Layout = (props) => {
    const ref = useRef();

    useEffect(() => {
        const canvas = ref.current;
        const ctx = canvas.getContext("2d");
        const coorinate = [
            [336.721, -75.096],
            [93.343, -10.415],
            [473.598, -11.657],
            [7.69800000000009, 443.69],
            [55.0640000000001, 3.87],
            [-37.0720000000001, 253.534],
            [-328.968, -63.51],
            [12.398, -91.336],
            [-105.888, -15.536],
            [-77.929, -4.987],
            [-11.716, 191.021],
            [-136.543, -8.375],
            [-6, -111.221],
            [-170.08, -10.432],
            [4.963, -79.531],
            [-204.971, -11.264],
            [4.472, -76.486],
            [90.384, 2.152],
            [0.216, -324.424],
        ];

        var x = 121.438;
        var y = 156.423;

        ctx.beginPath();
        ctx.moveTo(x, y);

        for (let i = 0; i < coorinate.length; i++) {
            x = x + coorinate[i][0];
            y = y + coorinate[i][1];
            ctx.lineTo(x, y);
        }
        ctx.fill();
        ctx.stroke();

        road(ctx);

        x = 802.587;
        y = 545.831;
        var x1 = 0;
        var y1 = 0;
        var c1 = 0;
        var c2 = 0;
        var an = -6;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 208, 116);
        x1 = -40.467;
        y1 = -16.577;

        rectangle(ctx, x, x1, y, y1, c1, c2, an, 7.2, 136.552);
        x1 = 22.794;
        y1 = 4.923;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 45.2, 50.4);
        x1 = 22.794 + 11.379;
        y1 = 4.923 + 1.287;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 22.4, 32);

        x1 = 28.439;
        y1 = 63.05;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 45.2, 50.4);
        x1 = 28.439 + 11.379;
        y1 = 63.05 + 1.287;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 22.4, 32);

        x1 = 78.533;
        y1 = 13.174;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 9.6, 9.6);

        c1 = 32;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 9.6, 9.6);

        c1 = 88;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 9.6, 9.6);
        c1 = 101.6;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 9.6, 9.6);

        x1 = 84.172;
        y1 = 71.128;
        c1 = 0;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 9.6, 9.6);
        c1 = 32;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 9.6, 9.6);
        c1 = 88;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 9.6, 9.6);
        c1 = 101.6;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 9.6, 9.6);

        //engine hall

        x = 145.278;
        y = 303.737;
        x1 = 0;
        y1 = 0;
        c1 = 0;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 316.812, 174.801);
        c1 = 257.8;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 59.012, 88.411);
        c2 = 88.411;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 59.012, 62.875);
        c2 = 88.411 + 62.875;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 59.012, 23.561);

        x1 = 52.209;
        y1 = 27.629;
        c1 = 0;
        c2 = 0;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 28, 98.511);
        c1 = 43.2;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 28, 98.511);
        c1 = 2 * 43.2;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 28, 98.511);
        c1 = 3 * 43.2;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 28, 98.511);

        x1 = 53.304;
        y1 = 28.525;
        c1 = 0;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 26, 96.511, 0.5);
        c1 = 43.2;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 26, 96.511, 0.5);
        c1 = 2 * 43.2;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 26, 96.511, 0.5);
        c1 = 3 * 43.2;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 26, 96.511, 0.5);
        x1 = 0;
        y1 = 0;
        c1 = 45.2;
        c2 = 174.8;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 13.2, 16, 0.5);
        rectangle(ctx, x, x1, y, y1, c1, c2 + 6.271, an, 13.2, 6.5, 0.5);
        rectangle(ctx, x, x1, y, y1, c1 + 13.2, c2, an, 9.6, 32, 0.5);
        circle(ctx, x, x1, y, y1, c1 + 13.2 + 4.8, c2 + 18.4, 4.8, an);
        circle(ctx, x, x1, y, y1, c1 + 13.2 + 4.8, c2 + 18.4, 4, an);
        c1 = c1 + 43.2;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 13.2, 16, 0.5);
        rectangle(ctx, x, x1, y, y1, c1, c2 + 6.271, an, 13.2, 6.5, 0.5);
        rectangle(ctx, x, x1, y, y1, c1 + 13.2, c2, an, 9.6, 32, 0.5);
        circle(ctx, x, x1, y, y1, c1 + 13.2 + 4.8, c2 + 18.4, 4.8, an);
        circle(ctx, x, x1, y, y1, c1 + 13.2 + 4.8, c2 + 18.4, 4, an);
        c1 = c1 + 43.2;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 13.2, 16, 0.5);
        rectangle(ctx, x, x1, y, y1, c1, c2 + 6.271, an, 13.2, 6.5, 0.5);
        rectangle(ctx, x, x1, y, y1, c1 + 13.2, c2, an, 9.6, 32, 0.5);
        circle(ctx, x, x1, y, y1, c1 + 13.2 + 4.8, c2 + 18.4, 4.8, an);
        circle(ctx, x, x1, y, y1, c1 + 13.2 + 4.8, c2 + 18.4, 4, an);
        c1 = c1 + 43.2;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 13.2, 16, 0.5);
        rectangle(ctx, x, x1, y, y1, c1, c2 + 6.271, an, 13.2, 6.5, 0.5);
        rectangle(ctx, x, x1, y, y1, c1 + 13.2, c2, an, 9.6, 32, 0.5);
        circle(ctx, x, x1, y, y1, c1 + 13.2 + 4.8, c2 + 18.4, 4.8, an);
        circle(ctx, x, x1, y, y1, c1 + 13.2 + 4.8, c2 + 18.4, 4, an);

        x1 = 69.737;
        y1 = 200.856;
        c1 = 0;
        c2 = 0;
        var cr1 = 13.8;
        var cr2 = 14.6;

        rectangle(ctx, x, x1, y, y1, c1, c2, an, 27.6, 29.2, 0.5);
        rectangle(ctx, x, x1, y, y1, c1 + 2.8, c2 + 2.8, an, 22, 23.6, 0.5);
        rectangle(ctx, x, x1, y, y1, c1 + 3.6, c2 + 3.6, an, 20.4, 22, 0.5);
        circle(ctx, x, x1, y, y1, cr1, cr2, 8.6, an);
        circle(ctx, x, x1, y, y1, cr1, cr2, 5.2, an);
        c1 = 43.2;

        rectangle(ctx, x, x1, y, y1, c1, c2, an, 27.6, 29.2, 0.5);
        rectangle(ctx, x, x1, y, y1, c1 + 2.8, c2 + 2.8, an, 22, 23.6, 0.5);
        rectangle(ctx, x, x1, y, y1, c1 + 3.6, c2 + 3.6, an, 20.4, 22, 0.5);
        circle(ctx, x, x1, y, y1, 13.8 + c1, cr2, 8.6, an);
        circle(ctx, x, x1, y, y1, 13.8 + c1, cr2, 5.2, an);

        c1 = 2 * 43.2;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 27.6, 29.2, 0.5);
        rectangle(ctx, x, x1, y, y1, c1 + 2.8, c2 + 2.8, an, 22, 23.6, 0.5);
        rectangle(ctx, x, x1, y, y1, c1 + 3.6, c2 + 3.6, an, 20.4, 22, 0.5);
        circle(ctx, x, x1, y, y1, 13.8 + c1, cr2, 8.6, an);
        circle(ctx, x, x1, y, y1, 13.8 + c1, cr2, 5.2, an);

        c1 = 3 * 43.2;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 27.6, 29.2, 0.5);
        rectangle(ctx, x, x1, y, y1, c1 + 2.8, c2 + 2.8, an, 22, 23.6, 0.5);
        rectangle(ctx, x, x1, y, y1, c1 + 3.6, c2 + 3.6, an, 20.4, 22, 0.5);
        circle(ctx, x, x1, y, y1, 13.8 + c1, cr2, 8.6, an);
        circle(ctx, x, x1, y, y1, 13.8 + c1, cr2, 5.2, an);

        //cat engine room
        x = 535.198;
        y = 188.181;
        x1 = 0;
        y1 = 0;
        c1 = 0;
        c2 = 0;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 267.979, 134.218, 0.5);
        rectangle(ctx, x, x1, y, y1, c1 + 217.979, c2, an, 50, 134.218, 0.5);
        c1 = 267.979 - 84.264;
        c2 = 134.218;
        rectangle(ctx, x, x1, y, y1, c1, c2, an, 84.264, 65.788, 0.5);
    }, []);

    return <canvas ref={ref} {...props} width={1200} height={800} />;
};

export default Layout;

function rectangle(
    ctx,
    x,
    x1,
    y,
    y1,
    c1,
    c2,
    an,
    d,
    h,
    ld = 0.5,
    ss = "#000000",
    fs = "#f9f9f9"
) {
    x = x + x1 + c1 * xe(an) + c2 * ye(-an);
    y = y + y1 + c1 * ye(an) + c2 * xe(-an);
    ctx.fillStyle = fs;
    ctx.moveTo(x, y);
    x = x + xe(an) * d;
    y = y + ye(an) * d;
    ctx.lineTo(x, y);
    x = x + xe(an + 90) * h;
    y = y + ye(an + 90) * h;
    ctx.lineTo(x, y);
    x = x + xe(an + 2 * 90) * d;
    y = y + ye(an + 2 * 90) * d;
    ctx.lineTo(x, y);
    x = x + xe(an + 3 * 90) * h;
    y = y + ye(an + 3 * 90) * h;
    ctx.lineTo(x, y);
    ctx.lineWidth = ld;
    ctx.strokeStyle = ss;
    ctx.fill();
    ctx.stroke();
}

function xe(angle) {
    return Math.cos((angle * Math.PI) / 180);
}
function ye(angle) {
    return Math.sin((angle * Math.PI) / 180);
}

function circle(ctx, x, x1, y, y1, c1, c2, r, an) {
    x = x + x1 + c1 * xe(an) + c2 * ye(-an);
    y = y + y1 + c1 * ye(an) + c2 * xe(-an);
    ctx.moveTo(x + r, y);
    ctx.arc(x, y, r, 0, 360);
    ctx.stroke();
}

function road(ctx) {
    var x = 128.315;
    var y = 246.78;
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.moveTo(x, y);
    ctx.lineTo(128.352, 190.173);
    ctx.lineTo(128.352 + 247.3 * xe(-6), 190.173 + 247.3 * ye(-6));
    ctx.lineTo(
        128.352 + 247.3 * xe(-6) + 23.454 * ye(6),
        190.173 + 247.3 * ye(-6) + 23.454 * xe(6)
    );

    ctx.arc(
        345.062,
        193.082,
        31.993,
        (0 / 180) * Math.PI,
        (78 / 180) * Math.PI
    );

    ctx.lineTo(x, y);

    ctx.moveTo(434.409, 92.628);
    ctx.arc(
        495.88,
        141.149,
        78.265,
        (218 / 180) * Math.PI,
        (177 / 180) * Math.PI,
        true
    );
    ctx.arc(
        434.754,
        139.942,
        17.738,
        (164 / 180) * Math.PI,
        (87 / 180) * Math.PI,
        true
    );
    ctx.lineTo(797.715, 97.174);
    ctx.lineTo(800.903, 129.05);
    ctx.lineTo(531.425, 181.041);
    ctx.arc(
        436.981,
        196.045,
        16,
        (264 / 180) * Math.PI,
        (174 / 180) * Math.PI,
        true
    );
    ctx.stroke();
}
