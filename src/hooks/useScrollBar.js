import { OverlayScrollbars } from "overlayscrollbars";
import { useEffect } from "react";

const configT = {

}

export const useScrollBar = (root, hasScroll, config) => {
    useEffect(() => {
        let scrollBars;
        if (root?.current && hasScroll) {
           scrollBars = OverlayScrollbars(root?.current, (config && config)|| configT)
        }

        return () => {
            if(scrollBars) {
                scrollBars.destroy()
                scrollBars = null;
            }
        }
    }, [root, hasScroll, config])
}