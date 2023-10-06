# Website Implementation Professor Comments

- **Documentation**: Well done
- **Responsiveness**: background image on the home page changes size when
expanding the information nodes.
- **Vue/Nuxt**: local head sometimes has a description while on some pages only the title
is present.
in general, good use and implementation of components. But, the name of
components could have been more generic to invite the reuse of said component
(e.g., AboutUs.vue is one element of the timeline. In the About Us page, it is used in a
v-for to fill the timeline. Calling it, for example, TimelineElement.Vue would have made
it more generic and allowed for more future use).
- **Accessibility**: In the "Project by Area" section, clicking the area's name opens the
selected area's page. Looking at the arrow, clicking the name should hide the content.
This happens when clicking the arrow.
If the picture is just decorative, there is no need to define an alternative text, just leave
the field empty (alt = "")