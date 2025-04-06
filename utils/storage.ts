import AsyncStorage from '@react-native-async-storage/async-storage';
const KEY_COMPLETED_TESTS = "completedTests"


export const saveCompletedTest = async (category:string) =>{
    const completed = await AsyncStorage.getItem(KEY_COMPLETED_TESTS);
    const completedTests = completed ? JSON.parse(completed) : [];
    //İf there is already completed specified category exit without saving
    if(completedTests.includes(category)){
        return;    
    }
    await AsyncStorage.setItem(KEY_COMPLETED_TESTS,JSON.stringify([...completedTests, category]));
}

export const getCompletedTests = async () => {
const completed = await AsyncStorage.getItem(KEY_COMPLETED_TESTS);
return completed ? JSON.parse(completed): [];
}