import { gql } from '@apollo/client';

// Get the first (and only) configuration
export const GET_CONFIGURATION = gql`
	query Configuration {
		configurations(first: 1) {
			id
			logoHtml
			primaryColor {
				hex
			}
			accentColor {
				css
			}
			footerContent {
				html
			}
			physicalAddress
			contactEmail
			contactPhoneNumber
			facebookLink
			instagramLink
		}
	}
`;