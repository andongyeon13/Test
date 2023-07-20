import React, { useEffect, useRef } from 'react';

const FadeInComponent = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // null일 경우 뷰포트를 기준으로 가시성을 체크합니다.
      rootMargin: '0px', // 추가적인 마진을 설정할 수 있습니다.
      threshold: 0.5, // 0부터 1까지, 타겟 엘리먼트가 얼마나 보일 때 콜백 함수를 호출할지를 설정합니다.
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 타겟 엘리먼트가 보이면 적절한 트랜지션을 적용하도록 로직을 추가합니다.
          entry.target.classList.add('fade-in'); // 예시: "fade-in" 클래스를 추가하여 트랜지션을 적용합니다.
          observer.unobserve(entry.target); // 한 번만 적용하도록 옵저버 관찰을 중지합니다.
        }
      });
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // 컴포넌트가 언마운트될 때 옵저버를 해제합니다.
    return () => observer.disconnect();
  }, []);

  return <div ref={targetRef} className = "fade-in">내용을 포함한 컴포넌트</div>;
};

export default FadeInComponent;
