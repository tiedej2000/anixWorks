type WorkImage = { src: string; alt?: string };

export type Work = {
	id: string;
	title: string;
	images: WorkImage[];
	description: string;
};

export const worksLogos: Work[] = [
	{
		id: '4',
		title: 'strafe',
		images: [
			{ src: '/bilder/strafe_test.png', alt: 'test' },
			{ src: '/bilder/strafe_test2.png', alt: 'test' }
		],
		description: 'strafe1',
	},
	{
		id: '4',
		title: 'strafe',
		images: [
			{ src: '/bilder/strafe_test.png', alt: 'test' },
			{ src: '/bilder/strafe_test2.png', alt: 'test' }
		],
		description: 'strafe1',
	},
	{
		id: '4',
		title: 'strafe',
		images: [
			{ src: '/bilder/strafe_test.png', alt: 'test' },
			{ src: '/bilder/strafe_test2.png', alt: 'test' }
		],
		description: 'strafe1',
	},
	{
		id: '4',
		title: 'strafe',
		images: [
			{ src: '/bilder/strafe_test.png', alt: 'test' },
			{ src: '/bilder/strafe_test2.png', alt: 'test' }
		],
		description: 'strafe1',
	},
	
];
