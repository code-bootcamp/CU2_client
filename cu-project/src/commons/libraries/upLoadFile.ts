// import { gql, GraphQLClient } from "graphql-request";
// export async function uploadFile(file: any) {
//     try {
//         const graphQLClient = new GraphQLClient(
//           process.env.NEXT_PUBLIC_GRAPHQL_URL!,
//           {
//             credentials: "include",
//           }
//         );
//         const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
//         const newAccessToken = result.restoreAccessToken;
//         return newAccessToken;
//       } catch (error) {
//       }

//   const extension = filename.split(".")[filename.split(".").length - 1];
//   const newFileName = new Date().toISOString().concat(".", extension);
//   try {
//     const result = await storage.bucket("cucutoo-dev-res").upload(filename, {
//       destination: newFileName,
//     });

//     return {
//       _id: newFileName,
//       url: "freeboard-gchoi/" + newFileName,
//       size: Number(result[0].metadata.size),
//     };
//   } catch (err: any) {
//   }
// }
export {}