import { useEffect } from "react";


function useDropDown(ref,changeState){

    useEffect(() => {
        const handler = (event) => {
            //if reference is not assigned to any element
            if (!ref.current) {
                return;
            }

            if (!ref.current.contains(event.target)) {
                changeState()
            }
        };

        document.addEventListener("click", handler, true);

        //cleanup function
        return () => {
            document.removeEventListener("click", handler);
        };
    }, []);
}

export default useDropDown;