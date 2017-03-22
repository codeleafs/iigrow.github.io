
Clarity at the point of use.
Design APIs to make those uses clear and concise.

Clarity is more important than brevity.

Omit needless words. Every word in a name should convey salient information at the use site.
repeating type information is necessary to avoid ambigutiy, but in general it is better to use a word that describes a parameter's role rather than its type.

Name variables,parameters,and associated types according to their roles,rather than their type constraints.

Compensate for weak type information to clarify a parameter's role.

Prefer method and function names that make use sites form grammatical English phrases.

Name functions and methods according to their side-effects.

those without side-effects should read as noun phrases.(x.distance(to: y),未引起实体的变化)

those with side-effects should read as imperative verb phrases.(x.sort(),x.append(y),引起了实体的变化)

when the operation is naturally described by a verb,use the verb's imperative for the mutating method and apply the 'ed' or 'ing' suffix to name its nonmutating counterpart.

Mutating和Nonmutating方法不同之处在于 Nonmutating returns a new value rather updating an instance in-place.
Mutating: x.sort() x.append(y) 引起了x的变化，无需返回新对象
Nonmutating: z = x.sorted() z = x.appending(y) 未引起x的变化，返回一个变化的️新对象。

when the operation is naturally described by a noun,use the noun for the nonmutating method and apply the 'form' prefix to name its mutating counterpart.

Mutating: y.formUnion(z) 
Nonmutating: x = y.union(z)

the names of other types,properties,variables,and constants should read as nouns.
