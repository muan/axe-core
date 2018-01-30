const landmarks = axe.commons.aria.getRolesByType('landmark');
const sectioning = ['article', 'aside', 'main', 'navigation', 'section'];
const nodeIsHeader = node.tagName.toLowerCase() === 'header' && node.getAttribute('role') !== 'banner';
var parent = axe.commons.dom.getComposedParent(node);

while (parent){
	var role = parent.getAttribute('role');
	if (!role && (parent.tagName.toLowerCase() !== 'form')){
		role = axe.commons.aria.implicitRole(parent);
	}
  if (role && nodeIsHeader && sectioning.includes(role)){
    return true;
  }
	if (role && landmarks.includes(role)){
		return false;
	}
	parent = axe.commons.dom.getComposedParent(parent);
}
return true;