import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function useScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}

/**
 * 检测到 如果pathname 跳转页面  ---> 则让window.scrollTo 为顶部
 */