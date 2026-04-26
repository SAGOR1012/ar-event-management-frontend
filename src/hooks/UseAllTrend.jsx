import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosPublic from './UseAxiosPublic';
const UseAllTrend = () => {
  const axiosPublic = UseAxiosPublic();

  const {
    data: trendingEvents = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['trendingevents'],
    queryFn: async () => {
      const res = await axiosPublic.get('/allevents');
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  //   const trendingEvents = allEvents.slice(0, 3);

  return [trendingEvents, isLoading, error, refetch];
};

export default UseAllTrend;
