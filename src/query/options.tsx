export const defaultQueryOptions = {
  staleTime: 1000000, // 마운드된 이후는 데이터 유지
  cacheTime: 0, // 언마운트 된 이후 캐시 데이터 삭제
  refetchOnMount: true,
}

