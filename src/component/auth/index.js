import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserToken } from '../../module/user/userSelector';
import { useEffect } from 'react';

const Auth = ({ children }) => {
    const navigate = useNavigate();
    const token = useSelector(getUserToken);

    useEffect(() => {
        if (!token) {
          navigate('/login');
        }
      }, [token, navigate]);

    return token ? children : null;
};

export default Auth;