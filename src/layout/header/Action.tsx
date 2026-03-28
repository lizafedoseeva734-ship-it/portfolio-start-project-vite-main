import styled from 'styled-components';
import { Icon } from '../../components/Icon';
import { Wrapper } from '../../components/Wrapper';

export const Action = () => {
    return (
        <Wrapper
            justify="space-between"
            align="center"
            width="100%" 
        >
            <Icon name="burger-menu" width={32} height={21} />
        </Wrapper>
    );
};




