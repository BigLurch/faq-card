const collapsableContent = () => {
        const collapsableContainer = document.querySelectorAll('.collapsable-content')
    const collapsableLinks = document.querySelectorAll('.collapsable-content__link')

     const addCollapseButtonsToLink = () => {

        collapsableLinks.forEach(link => {

            const buttonEl = document.createElement('span')
            buttonEl.classList.add('material-symbols-outlined')
            buttonEl.textContent = 'expand_more'

            link.append(buttonEl)

        })

    }

    addCollapseButtonsToLink()

    const toggleContent = (event) => {
        
         event.preventDefault()
        
        const sibling = event.currentTarget.nextElementSibling
        const boldLink = event.currentTarget
        
        sibling.classList.toggle('collapsable-content__text--open')
        boldLink.classList.toggle('collapsable-content__link--open')

        const expandIcon = event.currentTarget.querySelector('span')

        if ( expandIcon.textContent == 'expand_more') {
            expandIcon.textContent = 'expand_less'
        } else {
            expandIcon.textContent = 'expand_more'
        }
    }

    collapsableLinks.forEach(link => link.addEventListener('click', toggleContent))

}

collapsableContent()