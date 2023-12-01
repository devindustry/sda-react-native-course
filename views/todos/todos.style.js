import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const StyledView = styled.View`
    background-color: #fff;
    flex: 1;
`;

export const StyledTodoItemView = styled.View`
  background-color: ${({ done, theme}) => done ? theme.colors.background : theme.colors.textBackground};
  padding: 16px;
  border-bottom-color: ${({theme}) => theme.colors.borderColor};
  border-bottom-width: 1px;
`
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    containerLoader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainerProgress: {
        padding: 20,
        marginVertical: 8,
        backgroundColor: 'yellow',
    },
    itemContainerDone: {
        padding: 20,
        marginVertical: 8,
        backgroundColor: 'green',
    },
    swipeableText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        backgroundColor: 'gray',
    }
});

export const StyledContextMenuText = styled.Text`
  background-color: #fff;
  color: ${({theme}) => theme.colors.background};
  font-weight: bold;
  padding: 16px;
  flex: 1;
`;