import { OverlayScrollbars } from "overlayscrollbars";
import { useEffect } from "react";

const config = {

}

export const useScrollBar = (root, hasScroll) => {
    useEffect(() => {
        let scrollBars;
        if (root?.current && hasScroll) {
           scrollBars = OverlayScrollbars(root?.current, config)
        }

        return () => {
            if(scrollBars) {
                scrollBars.destroy()
                scrollBars = null;
            }
        }
    }, [root, hasScroll])
}