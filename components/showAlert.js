import { Alert } from 'react-native'


export const showAlert = (title, msg) =>  Alert.alert(
    title,
    msg,
    // [
    //   {
    //     text: "Cancel",
    //     onPress: () => Alert.alert("Cancel Pressed"),
    //     style: "cancel",
    //   },
    // ],
    // {
    //   cancelable: true,
    //   onDismiss: () =>
    //     Alert.alert(
    //       "This alert was dismissed by tapping outside of the alert dialog."
    //     ),
    // }
  );