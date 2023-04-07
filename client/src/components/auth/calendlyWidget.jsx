// import { createClient } from '@calendly/api';

// const client = createClient({
//     apiKey: 'PIJDIAOETBQ5JI73S3QIIHPIVQHXGWEJ',
// });


// export async function getAvailability(date) {
//     const response = await client.getAvailability({
//         date: date,
//         timeZone: 'UTC',
//         duration: 30,
//     });

//     return response.availabilities.map((availability) => {
//         return {
//             start: availability.start_time,
//             end: availability.end_time,
//         };
//     });
// }
