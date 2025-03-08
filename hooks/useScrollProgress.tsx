import { useState, useEffect} from 'react'

const useScrollProgress = (): number => {
  const [completion, setCompletion] = useState<number>(0);

  useEffect(() => {
    const updateScrollCompletion = (): void => {
      const currentProgress: number = window.scrollY;
      const scrollHeight: number = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    }

    window.addEventListener('scroll', updateScrollCompletion);

    return () => {
      window.removeEventListener('scroll', updateScrollCompletion);
    }
  }, [])


  return completion;
}

export default useScrollProgress
