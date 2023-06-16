import React from "react";

const Rectangle = (
    ctx,
    x,
    y,
    angle,
    width,
    height,
    lineWidth = 0.5,
    strokeStyle = "black",
    fillStyle = "#f9f9f9"
) => {
    return (
        <>
            ctx.fillStyle = fillStyle; ctx.moveTo(x, y); x = x + Math.cos((angle
            * Math.PI) / 180) * width; y = y + Math.sin((angle * Math.PI) / 180)
            * width; ctx.lineTo(x, y); x = x + Math.cos(((angle + 90) * Math.PI)
            / 180) * height; y = y + Math.sin(((angle + 90) * Math.PI) / 180) *
            height; ctx.lineTo(x, y); x = x + Math.cos(((angle + 2 * 90) *
            Math.PI) / 180) * width; y = y + Math.sin(((angle + 2 * 90) *
            Math.PI) / 180) * width; ctx.lineTo(x, y); x = x + Math.cos(((angle
            + 3 * 90) * Math.PI) / 180) * height; y = y + Math.sin(((angle + 3 *
            90) * Math.PI) / 180) * height; ctx.lineTo(x, y); ctx.lineWidth =
            lineWidth; ctx.strokeStyle = strokeStyle; ctx.fill(); ctx.stroke();
        </>
    );
};

export default Rectangle;
