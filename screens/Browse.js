import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View
} from "react-native";

import { Card, Badge, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";

import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get("window");

class Browse extends Component {
  state = {
    active: "Medicaments",
    categories: []
  };

  componentDidMount() {
    this.setState({ categories: this.props.categories });
  }

  handleTab = tab => {
    const { categories } = this.props;
    const filtered = categories.filter(category =>
      category.tags.includes(tab.toLowerCase())
    );

    this.setState({ active: tab, categories: filtered });
  };

  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { profile, navigation } = this.props;
    const { categories } = this.state;
    const tabs = ["Medicaments", "En attente", "Deja servi"];

    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h2 bold>
            Zone de sante de SAKE
          </Text>
          <Button onPress={() => navigation.navigate("Settings")}>
            <Image source={profile.avatar} style={styles.avatar} />
          </Button>
        </Block>

        <Block flex={false} row style={styles.tabs}>
          {tabs.map(tab => this.renderTab(tab))}
        </Block>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base * 2 }}
        >
          <Block flex={false} row space="between" style={styles.categories}>
            {categories.map(category => (
              <TouchableOpacity
                key={category.name}
                onPress={() => navigation.navigate("Explore", { category })}
              >
                <Card column left middle shadow style={styles.category}>


                <View style={styles.container}>
                <View style={styles.pic}>
                  <Badge
                    
                    margin={[0, 0, 15]}
                    size={50}
                    color="rgba(41,216,143,0.20)"
                  >
                    <Image source={category.image} />
                  </Badge>
                </View>
                <View style={styles.med}>
                  <Text medium height={20}>
                    {category.name}
                  </Text>
                  <Text gray caption>
                    {category.count} products
                  </Text>
                </View>
              </View>
                </Card>
              </TouchableOpacity>
            ))}
          </Block>
        </ScrollView>
        {/* <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="ios-cloud" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="ios-remove" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Icon name="ios-person-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton> */}
        
      </Block>
    );
  }
}

Browse.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories
};

export default Browse;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingTop:30
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
    textAlign:"center"
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5
  },
  category: {
    
    // this should be dynamic based on screen width
    //backgroundColor:"#134143",
    width: (width - theme.sizes.padding * 2.4 - theme.sizes.base),
    //maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base),
    //maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2
  },
  pic:{
   
    //maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base)/4,
  },
  med: {
    
    paddingTop:10,
    paddingLeft:10,
    width: (width - theme.sizes.padding * 2.4 - theme.sizes.base) - ((width - theme.sizes.padding * 2.4 - theme.sizes.base)/4),
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  }
});
