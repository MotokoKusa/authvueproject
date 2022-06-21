export default async function getAnalytics(id) {
  const API_URL = "https://track-api.leadhit.io/client/test_auth";
  const response = await fetch(API_URL, {
    headers: {
      "Api-Key": "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
      "Leadhit-Site-Id": `${id}`,
    },
  });
  const dataAnalytics = await response.json();
  return dataAnalytics.message;
}
