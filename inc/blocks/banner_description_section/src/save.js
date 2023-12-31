/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save(props) {
	const { Heading, description, mediaURL } = props.attributes;
	return (
		<section id="banner-description" {...useBlockProps.save()}>
			<div className="banner-description">
					<div className="banner-description__inner">
						<div className="row banner">
							<div className="col-lg-4 co-md-4 col-12">
								<div className="banner-description__inner_img">
								<img src={mediaURL}/>
								</div>
							</div>
							<div className="col-lg-8 co-md-8 col-12">
								<div className="banner-description__inner_heading">
									<RichText.Content tagName="h4" value={Heading} />
								</div>
								<div className="banner-description__inner_description">
									<RichText.Content tagName="p" value={description} />
								</div>
							</div>
						
					</div>
				</div>
			</div>
		</section>
	);
}
