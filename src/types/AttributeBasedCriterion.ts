/**
 * A criterion is a predicate that controls when a given rule (e.g. a permission grant) applies.
 * Attribute-based criteria apply or not, depending on the attributes that a given user has.
 */
export interface AttributeBasedCriterion {
    issuer: string;
    attribute: string;
    value: string;
};
