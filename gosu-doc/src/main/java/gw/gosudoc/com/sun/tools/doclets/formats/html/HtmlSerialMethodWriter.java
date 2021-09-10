/*
 * This file is a shadowed version of the older javadoc codebase on which gosudoc is based; borrowed from jdk 9.
 */

package gw.gosudoc.com.sun.tools.doclets.formats.html;




import gw.gosudoc.com.sun.javadoc.MethodDoc;
import gw.gosudoc.com.sun.tools.doclets.formats.html.markup.*;
import gw.gosudoc.com.sun.tools.doclets.internal.toolkit.Content;
import gw.gosudoc.com.sun.tools.doclets.internal.toolkit.SerializedFormWriter;
import gw.gosudoc.com.sun.tools.doclets.internal.toolkit.taglets.TagletManager;
import gw.gosudoc.com.sun.tools.doclets.internal.toolkit.taglets.TagletWriter;

/**
 * Generate serialized form for Serializable/Externalizable methods.
 * Documentation denoted by the <code>serialData</code> tag is processed.
 *
 *  <p><b>This is NOT part of any supported API.
 *  If you write code that depends on this, you do so at your own risk.
 *  This code and its internal interfaces are subject to change or
 *  deletion without notice.</b>
 *
 * @author Joe Fialli
 * @author Bhavesh Patel (Modified)
 */
@Deprecated
public class HtmlSerialMethodWriter extends MethodWriterImpl implements
        SerializedFormWriter.SerialMethodWriter{

    public HtmlSerialMethodWriter(SubWriterHolderWriter writer,
            gw.gosudoc.com.sun.javadoc.ClassDoc classdoc) {
        super(writer, classdoc);
    }

    /**
     * Return the header for serializable methods section.
     *
     * @return a content tree for the header
     */
    public Content getSerializableMethodsHeader() {
        HtmlTree ul = new HtmlTree( HtmlTag.UL);
        ul.addStyle( HtmlStyle.blockList);
        return ul;
    }

    /**
     * Return the header for serializable methods content section.
     *
     * @param isLastContent true if the cotent being documented is the last content.
     * @return a content tree for the header
     */
    public Content getMethodsContentHeader(boolean isLastContent) {
        HtmlTree li = new HtmlTree(HtmlTag.LI);
        if (isLastContent)
            li.addStyle(HtmlStyle.blockListLast);
        else
            li.addStyle(HtmlStyle.blockList);
        return li;
    }

    /**
     * Add serializable methods.
     *
     * @param heading the heading for the section
     * @param serializableMethodContent the tree to be added to the serializable methods
     *        content tree
     * @return a content tree for the serializable methods content
     */
    public Content getSerializableMethods(String heading, Content serializableMethodContent) {
        Content headingContent = new StringContent(heading);
        Content serialHeading = HtmlTree.HEADING( HtmlConstants.SERIALIZED_MEMBER_HEADING,
                headingContent);
        Content li = HtmlTree.LI(HtmlStyle.blockList, serialHeading);
        li.addContent(serializableMethodContent);
        return li;
    }

    /**
     * Return the no customization message.
     *
     * @param msg the message to be displayed
     * @return no customization message content
     */
    public Content getNoCustomizationMsg(String msg) {
        Content noCustomizationMsg = new StringContent(msg);
        return noCustomizationMsg;
    }

    /**
     * Add the member header.
     *
     * @param member the method document to be listed
     * @param methodsContentTree the content tree to which the member header will be added
     */
    public void addMemberHeader( gw.gosudoc.com.sun.javadoc.MethodDoc member, Content methodsContentTree) {
        methodsContentTree.addContent(getHead(member));
        methodsContentTree.addContent(getSignature(member));
    }

    /**
     * Add the deprecated information for this member.
     *
     * @param member the method to document.
     * @param methodsContentTree the tree to which the deprecated info will be added
     */
    public void addDeprecatedMemberInfo( gw.gosudoc.com.sun.javadoc.MethodDoc member, Content methodsContentTree) {
        addDeprecatedInfo(member, methodsContentTree);
    }

    /**
     * Add the description text for this member.
     *
     * @param member the method to document.
     * @param methodsContentTree the tree to which the deprecated info will be added
     */
    public void addMemberDescription( gw.gosudoc.com.sun.javadoc.MethodDoc member, Content methodsContentTree) {
        addComment(member, methodsContentTree);
    }

    /**
     * Add the tag information for this member.
     *
     * @param member the method to document.
     * @param methodsContentTree the tree to which the member tags info will be added
     */
    public void addMemberTags( gw.gosudoc.com.sun.javadoc.MethodDoc member, Content methodsContentTree) {
        Content tagContent = new ContentBuilder();
        TagletManager tagletManager =
            configuration.tagletManager;
        TagletWriter.genTagOuput(tagletManager, member,
            tagletManager.getSerializedFormTaglets(),
            writer.getTagletWriterInstance(false), tagContent);
        Content dlTags = new HtmlTree(HtmlTag.DL);
        dlTags.addContent(tagContent);
        methodsContentTree.addContent(dlTags);
        MethodDoc method = member;
        if (method.name().compareTo("writeExternal") == 0
                && method.tags("serialData").length == 0) {
            serialWarning(member.position(), "doclet.MissingSerialDataTag",
                method.containingClass().qualifiedName(), method.name());
        }
    }
}