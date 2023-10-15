'use client';

import { Spinner } from '@nextui-org/react';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <Spinner className="flex justify-center items-center flex-col flex-1 min-h-screen w-full" />;
}
