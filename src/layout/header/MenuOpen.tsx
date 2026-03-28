import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

type MenuOpenProps = {
    onClose: () => void;
};

export const MenuOpen = ({ onClose }: MenuOpenProps) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const menuContent = (
        <StyledOverlay onClick={onClose}>
            <StyledMenu onClick={(e) => e.stopPropagation()}>
                <nav>
                    <ul>
                        <li>
                            <a href="/" onClick={onClose}>
                                who am i
                            </a>
                        </li>
                        <li>
                            <a href="/skills" onClick={onClose}>
                                my skills
                            </a>
                        </li>
                        <li>
                            <a href="/portfolio" onClick={onClose}>
                                portfolio
                            </a>
                        </li>
                        <li>
                            <a href="/testimonials" onClick={onClose}>
                                testimonials
                            </a>
                        </li>
                        <li>
                            <a href="/awards" onClick={onClose}>
                                awards
                            </a>
                        </li>
                        <li>
                            <a href="/blogs" onClick={onClose}>
                                blogs
                            </a>
                        </li>
                        <li>
                            <a href="/contact" onClick={onClose}>
                                contact me
                            </a>
                        </li>
                    </ul>
                </nav>
            </StyledMenu>
        </StyledOverlay>
    );

    return createPortal(menuContent, document.body);
};

const StyledOverlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(12px);
    transition: 0.6s ease;
    z-index: 1000;
`;

const StyledMenu = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.6s ease;

    width: 85%;
    max-width: 500px;
    padding: 48px 32px;
    border-radius: 28px;

    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    border: 1px solid rgba(59, 130, 246, 0.2);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    li {
        text-align: center;
    }

    a {
        font-size: 1.75rem;
        font-weight: 500;
        text-decoration: none;
        color: #0f172a;
        transition: all 0.6s ease;
        display: inline-block;

        &:hover {
            color: #98bffe;
            transform: translateX(8px);
        }
    }

    @media (max-width: 768px) {
        width: 90%;
        padding: 40px 24px;

        a {
            font-size: 1.5rem;
        }
    }
`;
