import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'Products',
    links: [
      { label: 'Community', icon: <FaCreditCard />, url: '/products' },
      { label: 'Content', icon: <FaCreditCard />, url: '/products' },
      { label: 'Roles', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'Solutions',
    links: [
      { label: 'Developers', icon: <FaBook />, url: '/products' },
      { label: 'Business Teams', icon: <FaBook />, url: '/products' },
      { label: 'Content Mangers', icon: <FaBook />, url: '/products' },
      { label: 'Ecommerce', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'Resources',
    links: [
      { label: 'Starter', icon: <FaBriefcase />, url: '/products' },
      { label: 'Showcase', icon: <FaBriefcase />, url: '/products' },
    ],
  },
];

export default sublinks;
