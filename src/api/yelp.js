import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer loODS2by1XRoBnbBpp3S3kVhjW5PXEE0qFENQWd3cCvTHd2AchqLqQC7tYEXDjn3WYYaPTMqsZmxaLXeC65GMGnGmZ-07fXXJ0OhLXxqkPDm6C1XfXRJVgGLxxIIXnYx '  
    }
});