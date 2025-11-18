import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // این خط را اضافه کنید
  output: 'export', 
  // و این خط را هم اضافه کنید تا مسیرها به درستی کار کنند
  trailingSlash: true,
  images: {
    // برای تصاویر محلی مشکلی نیست اما برای تصاویر خارجی باید loader سفارشی ساخت
    // در حالت استاتیک، بهتر است از تصاویر محلی استفاده کنید
    unoptimized: true, 
  },
};

export default nextConfig;