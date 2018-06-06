export class Post
{
	titre: string;
    contenu: string;
    loveIts: number;
    created_at: Date;

    constructor(m_titre, m_contenu, m_loves) {
    	this.created_at = new Date();
    	this.titre = m_titre;
    	this.contenu = m_contenu;
    	this.loveIts = m_loves;
    }
}