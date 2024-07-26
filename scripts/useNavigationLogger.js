import { useEffect } from 'react';
import { useNavigationState } from '@react-navigation/native';

export default function useNavigationLogger() {
    const routeName = useNavigationState((state) => state.routes[state.index].name);

    useEffect(() => {
        console.log('Current screen:', routeName);
    }, [routeName]);
}
