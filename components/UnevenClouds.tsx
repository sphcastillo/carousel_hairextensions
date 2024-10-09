// function UnevenClouds() {
//   return (
//     <div className="-mt-[90px]">
//       <div className="inset-x-0 bottom-0">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 320"
//           className="w-full h-auto transform rotate-180"
//         >
//           <path
//             // fill="#f9d1de"
//             fill="#e486a1"
//             fillOpacity="1"
//             d="M0,192Q80,160,160,200Q240,240,320,180Q400,120,480,150Q560,180,640,140Q720,100,800,160Q880,220,960,180Q1040,140,1120,180Q1200,220,1280,200Q1360,180,1440,210L1440,320L1360,320Q1280,320,1200,320Q1120,320,1040,320Q960,320,880,320Q800,320,720,320Q640,320,560,320Q480,320,400,320Q320,320,240,320Q160,320,80,320L0,320Z"
//           ></path>
//         </svg>
//       </div>
//     </div>
//   );
// }
// export default UnevenClouds;
function UnevenClouds() {
  return (
    <div className="-mt-[90px]">
      <div className="inset-x-0 bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto transform rotate-180"
        >
          {/* <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#f5347f", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#fdd9e5", stopOpacity: 1 }} />
            </linearGradient>
          </defs> */}
          <path
            fill="url(#gradient)"
            fillOpacity="1"
            d="M0,192Q80,160,160,200Q240,240,320,180Q400,120,480,150Q560,180,640,140Q720,100,800,160Q880,220,960,180Q1040,140,1120,180Q1200,220,1280,200Q1360,180,1440,210L1440,320L1360,320Q1280,320,1200,320Q1120,320,1040,320Q960,320,880,320Q800,320,720,320Q640,320,560,320Q480,320,400,320Q320,320,240,320Q160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default UnevenClouds;
