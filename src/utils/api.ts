import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  try {
    const { data } = await axios.get('https://qapi.vercel.app/api/random');
    return {
      quote: `“${data.quote}” — ${data.author}`,
    };
  } catch (error) {
    console.error("Error fetching quote:", error);
    return {
      quote: "Oops! Could not fetch a quote at this time.",
    };
  }
};