import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, Text } from 'react-native';

export type TabName = 'index' | 'search' | 'saved' | 'profile';

const tabs = [
	{ name: 'index', title: 'Home', iconKey: 'home' },
	{ name: 'search', title: 'Search', iconKey: 'search' },
	{ name: 'saved', title: 'Saved', iconKey: 'save' },
	{ name: 'profile', title: 'Profile', iconKey: 'person' },
];


const _Layout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarItemStyle: {
					width: '100%',
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center',
				},
				tabBarStyle: {
					backgroundColor: '#0f0d23',
					borderRadius: 50,
					marginHorizontal: 20,
					marginBottom: 36,
					height: 52,
					position: 'absolute',
					overflow: 'hidden',
					borderWidth: 1,
					borderColor: '#0f0d23',
				},
			}}
		>
			{tabs.map((tab) => (
				<Tabs.Screen
					key={tab.title}
					name={tab.name}
					options={{
						headerShown: false,
						title: '',

						tabBarIcon: ({ focused }) => (
							<>
								<ImageBackground
									source={focused ? images.highlight : null}
									className="flex gap-2 flex-row w-full flex-1 min-w-[118px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
								>
									<Image
										source={icons[tab.iconKey as keyof typeof icons]}
										tintColor={focused ? '#151311' : '#6b7280'}
										className="size-5"
									/>
									<Text className="text-secondary text-base font-semibold">
										{focused ? tab.title : null}
									</Text>
								</ImageBackground>
							</>
						),
					}}
				/>
			))}
		</Tabs>
	);
};

export default _Layout;
