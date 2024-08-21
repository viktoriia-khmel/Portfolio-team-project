// export function marqueeInnerMarkup(projectsUrl = []) {
//   const createLineMarkup = (shift = 0) => {
//     const shiftedProjectsUrl = [
//       ...projectsUrl.slice(shift),
//       ...projectsUrl.slice(0, shift),
//     ];

//     return shiftedProjectsUrl.reduce(
//       (strMarkup, { url1x, url2x }) =>
//         strMarkup +
//         `<li>        
//           <picture covers-marquee-picture>
//             <source
//               srcset="
//                 ${url1x} 1x,
//                 ${url2x} 2x               
//               "
//               type="image/webp"
//             />
//             <img
//               class="covers-marquee-img"
//               src="${url1x}"
//               alt="Project image"
//             />
//           </picture>
//         </li>
//         `,
//       ''
//     );
//   };

//   const lineMarkup1 = createLineMarkup(0);
//   const lineMarkup2 = createLineMarkup(2);
//   const lineMarkup3 = createLineMarkup(4);

//   return `
//     <div class="covers-marquee-inner">
//       <ul class="covers-marquee-line">${lineMarkup1}</ul>
//       <ul class="covers-marquee-line">${lineMarkup2}</ul>
//       <ul class="covers-marquee-line">${lineMarkup3}</ul>
//     </div>
//   `;
// }