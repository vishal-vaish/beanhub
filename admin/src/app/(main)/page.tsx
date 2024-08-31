"use client";

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const AdminDashboard = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [router]);

  return null; 
};

export default AdminDashboard;
