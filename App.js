import React, { Component } from 'react';
import {  View, Button } from 'react-native';

import { ScrollView, NativeModules } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    // NativeModules.BackgroundWorkManager.startBackgroundWork()
  }

  render() {
    return (
      <ScrollView 
        style={{backgroundColor: "#ffffff"}}
        keyboardShouldPersistTaps='handled'
      >
        <View style={{backgroundColor: "#ffffff", paddingBottom: 20}}>   
          <Button
            onPress={() => {
              NativeModules.TestHeadlessJsTaskModule.initService()
              //NativeModules.BackgroundWorkManager.startBackgroundWork()
            }}
            color='#2eb82e'
            title='Do something'
          />       
        </View>
      </ScrollView>
    )
  }

  // async clearData() {
  //   await storage.remove({
  //     key: 'storedSteamid'
  //   })
  //   this.setState({storedSteamId: false})
  //   if (this.state.intervalId) {
  //     BackgroundTimer.clearInterval(this.state.intervalId) 
  //   }
  //   this.componentDidMount()
  // }

  // async actionButton() {
  //   this.setState({isLoaded: false})
  //   this.state.steamid = this.state.steamid.trim()
    
  //   if (!this.state.steamid) {
  //     Alert.alert("Invalid data", "The Steam ID informed was invalid.")
  //     this.setState({steamid: '', isLoaded: true, isNotifying: false})
  //     return;
  //   }
  //   await this.setMyPersonaName(this.state.steamid)

  //   if (!this.state.personaname) {
  //     Alert.alert("Invalid data", "The Steam ID informed was invalid.")
  //     this.setState({steamid: '', isLoaded: true, isNotifying: false})
  //     return;
  //   }
    
  //   if (!this.state.storedSteamId) {
  //     await storage.save({
  //       key: 'storedSteamid',
  //       data: {
  //         steamid: this.state.steamid
  //       },
  //       expires: null
  //     });
  //     this.setState({ storedSteamId: true })
  //   }

  //   var friends = await this.getFriends(this.state.steamid).catch(error => console.error(error))
  //   friends = friends.toString()

  //   this.setState({ friends: friends, isNotifying: true, isLoaded: true  })

  //   if (this.state.intervalId) {
  //     BackgroundTimer.clearInterval(this.state.intervalId) 
  //   }
  //   const intervalId = BackgroundTimer.setInterval(async (friends = this.state.friends, registerToken = this.state.registerToken) => {
  //     console.log("Notification request - " + new Date())

  //     var strFriendsPlaying = this.state.strFriendsPlaying

  //     await fetch(`${api}/pushPlaying?steamids=${friends}`, {
  //       method: "POST",
  //       body: JSON.stringify({ registerToken, strFriendsPlaying }),
  //       headers: {
  //         'content-type': 'application/json'
  //       }
  //     })

  //     let strFriendsPlayingState = await this.currentFriendsPlaying(friends).catch((error) => console.error(error))
  //     this.setState({strFriendsPlaying: strFriendsPlayingState})
  //   }, 60000);
  //   this.setState({intervalId: intervalId})
  
  //   var strFriendsPlayingState = await this.currentFriendsPlaying(friends).catch((error) => console.error(error))
  //   this.setState({strFriendsPlaying: strFriendsPlayingState})
  // }

  // async setMyPersonaName(steamid) {
  //   const res = await fetch(`${api}/myPersonaName?steamid=${steamid}`, {
  //     method: "GET",
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   })

  //   var me = await res.json()
  //   me.personaname = me.personaname.toString()

  //   this.setState({ personaname: me.personaname })
  // }

  // async getFriends(steamid) {
  //   const res = await fetch(`${api}/friends?steamid=${steamid}`, {
  //     method: "GET",
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   return await res.json()
  // }

  // async currentFriendsPlaying(friends) {

  //   const res = await fetch(`${api}/friendsDetails?steamids=${friends}`, {
  //     method: "GET",
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   })

  //   const friendsPlaying = await res.json()

  //   var strFriendsPlaying = friendsPlaying.friendsPlaying.map((f) => {
  //     if (f) {
  //       return f['steamid']
  //     } else {
  //       return "offline"
  //     }
  //   })
  //   strFriendsPlaying = strFriendsPlaying.toString()
  //   return strFriendsPlaying
  // }

  // onRegister(token) {
  //   this.setState({ registerToken: token.token, fcmRegistered: true });
  // }

  // async onNotif(notif) {
  //   if (this.state.appState === 'active') {
  //     NotifService.localNotif('', notif.title, notif.message)
  //   }
  // }

  // handlePerm(perms) {
  //   Alert.alert('Permissions', JSON.stringify(perms));
  // }
}

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 20,
//     textAlign: 'center',
//     marginTop: 20,
//     color: 'black'
//   },
//   steamid: {
//     backgroundColor: '#e6e6e6',
//     borderRadius: 10,
//     marginHorizontal: 20,
//     marginBottom: 20
//   },
//   label: {
//     fontSize: 12,
//     marginLeft: 20,
//     textAlign: 'left',
//     marginTop: 20,
//     color: 'black'
//   },
// })
