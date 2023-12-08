import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from './Icons';
import {Colors} from '../types/colorType';
import Category from '../schemas/CategorySchema';
import PrimaryText from './atoms/PrimaryText';

interface CategoryContainerProps {
  categories: Array<Category>;
  toggleCategorySelection(category: Category): void;
  colors: Colors;
  selectedCategories: Array<Category>;
}

const CategoryContainer: React.FC<CategoryContainerProps> = ({
  categories,
  colors,
  toggleCategorySelection,
  selectedCategories,
}) => {
  console.log(selectedCategories);
  return (
    <View style={styles.categoryMainContainer}>
      {categories?.map((category: Category) => (
        <TouchableOpacity
          key={String(category._id)}
          onPress={() => toggleCategorySelection(category)}>
          <View
            style={[
              styles.categoryContainer,
              {
                backgroundColor: selectedCategories?.includes(category)
                  ? colors.accentGreen
                  : colors.primaryText,
                borderColor: colors.secondaryText,
              },
            ]}>
            {category.icon !== undefined ? (
              <View style={styles.iconContainer}>
                <Icon
                  name={category.icon}
                  size={20}
                  color={category.color}
                  type="MaterialCommunityIcons"
                />
              </View>
            ) : null}

            <PrimaryText style={{color: colors.buttonText, fontSize: 13}}>
              {category.name}
            </PrimaryText>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoryContainer;

const styles = StyleSheet.create({
  categoryMainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    height: 45,
    padding: 10,
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    marginRight: 5,
  },
});
