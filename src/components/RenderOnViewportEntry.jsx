import {Suspense, useRef} from 'react'
import Loader from './Loader';
import useFirstViewportEntry from '../Hooks/useFirstViewportEntry'

const RenderOnViewportEntry = ({
    children,
    threshold = 0,
    root = null,
    rootMargin = '0px 0px 0px 0px',
    ...wrapperDivProps
    }) => {
    const ref = useRef();
    const entered = useFirstViewportEntry(ref, {threshold, rootMargin, root});
    
    return (
        <div {...wrapperDivProps} ref={ref} >
            {entered && <Suspense fallback={<Loader />}>{children}</Suspense>}
        </div>
    )
}

export default RenderOnViewportEntry;