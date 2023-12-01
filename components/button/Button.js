import styled from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity`
    background-color: ${({theme, variant}) => variant === 'red' ? 'red' : theme.colors.primary};
    padding: 10px;
    border-radius: 14px;
    
`;

export const StyledButtonText = styled.Text`
    color: ${({theme}) => theme.colors.textBackground};
    text-align: center;
`;


