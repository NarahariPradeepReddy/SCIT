
// import { PieChart, Pie, Cell, Tooltip } from "recharts";

// {/* Pie Chart Section */}
// <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
// <Typography variant="h4" sx={{ marginBottom: "1.5rem", fontWeight: "bold" }}>
//     Student Distribution Across Our Programs
// </Typography>
// <PieChart width={600} height={400}>
//     <Pie
//         data={data}
//         dataKey="students"
//         innerRadius={100}
//         outerRadius={150}
//         fill="#82ca9d"
//     >
//         {data.map((entry, index) => (
//             <Cell
//                 key={`cell-${index}`}
//                 onMouseEnter={() => handleMouseEnter(data, index)}
//             />
//         ))}
//     </Pie>
//     <Tooltip content={<CustomTooltip activeData={activeData} />} />
// </PieChart>
// </Box>
// const CustomTooltip = ({ activeData }) => {
//     return (
//         <Box
//             sx={{
//                 background: "#fff",
//                 padding: "0.5rem",
//                 borderRadius: "8px",
//                 boxShadow: 3,
//                 color: "text.primary",
//             }}
//         >
//             {activeData && (
//                 <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
//                     <li>
//                         <strong>Program:</strong> {activeData.name}
//                     </li>
//                     <li>
//                         <strong>Students:</strong> {activeData.students}
//                     </li>
//                 </ul>
//             )}
//         </Box>
//     );
// };