import p5 from 'p5';
import React, { createRef, useEffect, useRef } from 'react';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sketch: any;
}

export type P5WithProps = p5 & { onProps?: <T>(props: T) => void };

const P5Wrapper: React.FC<Props> = ({ sketch }) => {
  const wrapper = createRef<HTMLDivElement>();
  const canvasWrapper = useRef<P5WithProps>();

  useEffect(() => {
    if (wrapper.current === null) return;
    canvasWrapper.current = new p5(sketch, wrapper.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sketch]);

  // useEffect(() => {
  //   if (
  //     canvasWrapper &&
  //     canvasWrapper.current &&
  //     canvasWrapper.current.onProps
  //   ) {
  //     canvasWrapper.current.onProps<boolean>(isCanvasVisible);
  //   }
  // }, [isCanvasVisible]);

  return (
    <>
      <div
        ref={wrapper}
      />
    </>
  );
};

export default P5Wrapper;
