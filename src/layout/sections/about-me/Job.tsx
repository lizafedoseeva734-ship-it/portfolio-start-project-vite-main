import styled from 'styled-components';
import { Reveal } from '../../../components';
import { Description } from '../../../components/Description';
import { theme } from '../../../styles/theme';

export const Job = () => {
    return (
        <JobWrap>
            <Reveal>
                <Description lineHeight="1.7">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta explicabo.
                </Description>
            </Reveal>
            <Reveal>
                <Description lineHeight="1.7">
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus maiores alias consequatur aut
                    perferendis doloribus asperiores repellat quia voluptas sit
                    aspernatur te natus error sit voluptatem accusan.
                </Description>
            </Reveal>
            <Reveal>
                <LinkWrapper href="#">
                    <JobBtn>about me</JobBtn>
                </LinkWrapper>
            </Reveal>
        </JobWrap>
    );
};

const JobWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;

    @media (max-width: ${theme.breakpoints.mobile}) {
        gap: 24px;
        align-items: center;
        text-align: center;
    }
`;

const LinkWrapper = styled.a`
    text-decoration: none;
    display: inline-block;
    width: fit-content;
    transition: transform 0.3s ease;
`;

const JobBtn = styled.button`
    margin-top: 20px;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
    color: ${theme.colors.white};
    width: 188px;
    height: 56px;
    background: ${theme.colors.dark[900]};
    border: 2px solid ${theme.colors.dark[900]};
    cursor: pointer;
    transition: all 0.7s;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(59, 130, 246, 0.1);
        transform: translate(-50%, -50%);
        transition:
            width 0.7s ease,
            height 0.7s ease;
    }

    &:hover {
        color: ${theme.colors.dark[900]};
        background: ${theme.colors.white};
        border-color: ${theme.colors.primary[500]};
        transform: translateY(-2px);
        box-shadow: 0 10px 20px -10px rgba(59, 130, 246, 0.3);

        &::before {
            width: 300px;
            height: 300px;
        }
    }

    &:active {
        transform: translateY(0);
        transition: transform 0.1s ease;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        margin-top: 0;
    }
`;
